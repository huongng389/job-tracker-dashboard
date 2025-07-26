export type JobStatus = 'applied' | 'interview' | 'offer' | 'rejected'

export type Job = {
  id: number
  title: string
  company: string
  location: string
  status: JobStatus
  pinned: boolean
}
