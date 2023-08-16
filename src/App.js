import Box from '@mui/material/Box';
import SideBar from './components/SideBar';
import MainComponent from './components/MainComponent';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

function App() {

  return (

      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box className='BigMain' component="main" sx={{ flexGrow: 1,  position: "relative" }}>
          <MainComponent />
        </Box>
      </Box>

  );
}

export default App;
