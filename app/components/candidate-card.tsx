"use client"

import type React from "react"

import styles from "./candidate-card.module.css"

interface Candidate {
  id: string
  name: string
  stage: string
  appliedDate: string
  score: number
  isReferred: boolean
  hasAssessment: boolean
  avatar?: string
  initials?: string
}

interface CandidateCardProps {
  candidate: Candidate
  onClick: () => void
}

export default function CandidateCard({ candidate, onClick }: CandidateCardProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("candidateId", candidate.id)
  }

  const renderStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < score ? styles.starFilled : styles.starEmpty}>
        ⭐
      </span>
    ))
  }

  return (
    <div className={styles.card} onClick={onClick} draggable onDragStart={handleDragStart}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {candidate.avatar ? (
            <img src={candidate.avatar || "/placeholder.svg"} alt={candidate.name} />
          ) : (
            <div className={styles.initials}>{candidate.initials}</div>
          )}
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>{candidate.name}</h4>
          <p className={styles.date}>Applied at {candidate.appliedDate}</p>
        </div>
        <button className={styles.moreButton}>⋯</button>
      </div>

      <div className={styles.footer}>
        <div className={styles.score}>
          <span className={styles.scoreText}>⭐ {candidate.score} Overall</span>
        </div>
        {candidate.isReferred && <span className={styles.referredBadge}>& Referred</span>}
      </div>

      {!candidate.hasAssessment && <button className={styles.assessmentButton}>+ Add Assessment</button>}
    </div>
  )
}
