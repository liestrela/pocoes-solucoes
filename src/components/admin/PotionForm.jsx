import { useState } from 'react'
import styles from './PotionForm.module.css'

const EMPTY = { name: '', description: '', image: '', price: '' }

export default function PotionForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) setFieldErrors(prev => ({ ...prev, [name]: null }))
  }

  function validate() {
    const errors = {}
    if (!form.name.trim()) errors.name = 'Nome é obrigatório'
    if (!form.description.trim()) errors.description = 'Descrição é obrigatória'
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0)
      errors.price = 'Preço deve ser um número positivo'
    return errors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setSubmitting(true)
    try {
      await onAdd({ ...form, price: Number(form.price) })
      setForm(EMPTY)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.heading}>Adicionar Poção</h2>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`${styles.input} ${fieldErrors.name ? styles.inputError : ''}`}
          value={form.name}
          onChange={handleChange}
          placeholder="ex: Poção Blue Sky"
          autoComplete="off"
        />
        {fieldErrors.name && <p className={styles.fieldError}>{fieldErrors.name}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="description">Descrição</label>
        <textarea
          id="description"
          name="description"
          className={`${styles.textarea} ${fieldErrors.description ? styles.inputError : ''}`}
          value={form.description}
          onChange={handleChange}
          placeholder="Descreva os efeitos da poção…"
          rows={4}
        />
        {fieldErrors.description && <p className={styles.fieldError}>{fieldErrors.description}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="image">URL da imagem</label>
        <input
          id="image"
          name="image"
          type="url"
          className={styles.input}
          value={form.image}
          onChange={handleChange}
          placeholder="https://…"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="price">Preço (moedas)</label>
        <input
          id="price"
          name="price"
          type="number"
          min="1"
          className={`${styles.input} ${fieldErrors.price ? styles.inputError : ''}`}
          value={form.price}
          onChange={handleChange}
          placeholder="ex: 300"
        />
        {fieldErrors.price && <p className={styles.fieldError}>{fieldErrors.price}</p>}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={submitting}>
        {submitting ? 'Adicionando…' : 'Adicionar ao estoque'}
      </button>
    </form>
  )
}
