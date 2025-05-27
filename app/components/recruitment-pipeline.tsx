"use client"

import { useState } from "react"
import Header from "./header"
import JobHeader from "./job-header"
import FilterBar from "./filter-bar"
import KanbanBoard from "./kanban-board"
import { candidatesData } from "@/data/candidates"
import styles from "./recruitment-pipeline.module.css"

export default function RecruitmentPipeline() {
  const [candidates, setCandidates] = useState(candidatesData)
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  const handleCandidateMove = (candidateId: string, newStage: string) => {
    setCandidates((prev) =>
      prev.map((candidate) => (candidate.id === candidateId ? { ...candidate, stage: newStage } : candidate)),
    )
  }

  const handleCandidateClick = (candidate: any) => {
    setSelectedCandidate(candidate)
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <JobHeader />
        <FilterBar />
        <KanbanBoard
          candidates={candidates}
          onCandidateMove={handleCandidateMove}
          onCandidateClick={handleCandidateClick}
        />
      </div>

      {selectedCandidate && (
        <div className={styles.modal} onClick={() => setSelectedCandidate(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>Candidate Details</h3>
            <p>
              <strong>Name:</strong> {selectedCandidate.name}
            </p>
            <p>
              <strong>Stage:</strong> {selectedCandidate.stage}
            </p>
            <p>
              <strong>Applied:</strong> {selectedCandidate.appliedDate}
            </p>
            <p>
              <strong>Score:</strong> {selectedCandidate.score}
            </p>
            <p>
              <strong>Referred:</strong> {selectedCandidate.isReferred ? "Yes" : "No"}
            </p>
            <button onClick={() => setSelectedCandidate(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
