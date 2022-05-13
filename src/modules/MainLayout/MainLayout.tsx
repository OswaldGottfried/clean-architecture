import { Navigation } from './'
import { Router } from '../../routing/router'

export const MainLayout: React.FC = () => (
  <>
    <header>
      <Navigation />
    </header>
    <main>
      <Router />
    </main>
  </>
)
