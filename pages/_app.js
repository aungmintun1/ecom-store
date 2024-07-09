import '../styles/styles.css'
import { AppProvider } from '../components/AppProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
    <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
