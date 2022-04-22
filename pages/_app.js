import 'antd/dist/antd.css'
// import 'tailwindcss/tailwind.css' // only use this if no components extracted for tailwind
import './../globals.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
