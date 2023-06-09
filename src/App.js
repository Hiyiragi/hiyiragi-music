import { useEffect, useReducer } from "react";

import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";

import { initialState, playerReducer } from "context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";

//import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";
//import react toastify css
import "react-toastify/dist/ReactToastify.css";
//import rc-slider css
import "rc-slider/assets/index.css";

import { setLocalStorage } from "services/localStorage";
import AppRouter from "AppRouter";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  useEffect(() => {
    setLocalStorage("savedTrackIDs", state.savedTrackIDs);
  }, [state.savedTrackIDs]);
  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme baseColor={theme.colors.black} highlightColor={theme.colors.lightWhite}>
            <GlobalStyles />
            <AppRouter />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
