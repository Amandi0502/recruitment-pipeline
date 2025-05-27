"use client"

import type React from "react"

import CandidateCard from "./candidate-card"
import styles from "./kanban-column.module.css"

interface Stage {
  id: string
  title: string
  color: string
  count: number
}

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

interface KanbanColumnProps {
  stage: Stage
  candidates: Candidate[]
  onCandidateMove: (candidateId: string, newStage: string) => void
  onCandidateClick: (candidate: Candidate) => void
}

export default function KanbanColumn({ stage, candidates, onCandidateMove, onCandidateClick }: KanbanColumnProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const candidateId = e.dataTransfer.getData("candidateId")
    onCandidateMove(candidateId, stage.id)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className={styles.column} onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className={styles.header} style={{ backgroundColor: stage.color }}>
        <span className={styles.title}>{stage.title}</span>
        <span className={styles.count}>{candidates.length}</span>
        <button className={styles.detailButton}>Detail →</button>
      </div>

      <div className={styles.content}>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} onClick={() => onCandidateClick(candidate)} />
        ))}
      </div>
    </div>
  )
}
