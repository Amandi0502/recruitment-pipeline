import KanbanColumn from "./kanban-column"
import styles from "./kanban-board.module.css"

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

interface KanbanBoardProps {
  candidates: Candidate[]
  onCandidateMove: (candidateId: string, newStage: string) => void
  onCandidateClick: (candidate: Candidate) => void
}

export default function KanbanBoard({ candidates, onCandidateMove, onCandidateClick }: KanbanBoardProps) {
  const stages = [
    { id: "applying", title: "Applying Period", color: "#ff8c00", count: 27 },
    { id: "screening", title: "Screening", color: "#9966cc", count: 23 },
    { id: "interview", title: "Interview", color: "#4a90e2", count: 3 },
    { id: "test", title: "Test", color: "#50c878", count: 2 },
  ]

  const getCandidatesByStage = (stageId: string) => {
    return candidates.filter((candidate) => candidate.stage === stageId)
  }

  return (
    <div className={styles.board}>
      {stages.map((stage) => (
        <KanbanColumn
          key={stage.id}
          stage={stage}
          candidates={getCandidatesByStage(stage.id)}
          onCandidateMove={onCandidateMove}
          onCandidateClick={onCandidateClick}
        />
      ))}
    </div>
  )
}
