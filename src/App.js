import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <div>
       <Provider store={store}>
       <RouterProvider router={router} />
       </Provider>
        
    </div>
  );
}

export default App;
