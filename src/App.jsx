import AppRouter from './routes/Router'
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <Toaster richColors closeButton />
      <div className='max-w-4xl mx-auto p-4'>
        <AppRouter />
      </div>
    </>
  )
}

export default App