import { Timer } from './Timer'
import { OverviewMode } from './OverviewMode'
import { PresenterNotes } from './PresenterNotes'
import { KeyboardHelp } from './KeyboardHelp'

export function PresenterHUD() {
  return (
    <>
      <Timer />
      <PresenterNotes />
      <OverviewMode />
      <KeyboardHelp />
    </>
  )
}
