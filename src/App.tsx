
import './App.css'
import Controls from './components/Controls'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider>
      <div className='p-2 flex justify-between'>
      <h1 className='text-4xl font-bold mb-4'>Sorting Visualizer</h1>
      <Controls />
      <ModeToggle/>
    </div>
    </ThemeProvider>
  )
}

export default App
