import "antd/dist/antd.css";
// import 'tailwindcss/tailwind.css' // only use this if no components extracted for tailwind
import "./../globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
