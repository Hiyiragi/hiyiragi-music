import { getStorageValue } from "services/localStorage";
import { actions } from "./actions";

export const initialState = {
  isPlaying: false,
  track: null,
  tracks: [],
  savedTrackIDs: getStorageValue("savedTrackIDs") || [],
};

export function playerReducer(state, action) {
  switch (action.type) {
    case actions.SET_TRACKS_DATA: {
      return {
        ...state,
        isPlaying: action.isPlaying,
        track: action.track,
        tracks: action.tracks,
      };
    }
    case actions.TOGGLEPLAY: {
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    }
    case actions.NEXT_SONG: {
      if (!state.tracks || !state.track) return state;
      const currentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);
      const nextSongIndex = currentSongIndex === state.tracks.length - 1 ? 0 : currentSongIndex + 1;
      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }
    case actions.PREV_SONG: {
      if (!state.tracks || !state.track) return state;
      const currentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);
      const prevSongIndex = currentSongIndex === 0 ? state.tracks.length - 1 : currentSongIndex - 1;
      return {
        ...state,
        track: state.tracks[prevSongIndex],
      };
    }
    case actions.TOGGLE_SAVE_TRACK: {
      const indexOfTrack = state.savedTrackIDs.indexOf(action.trackID);
      if (indexOfTrack >= 0) {
        const newSavedTrackIDs = [...state.savedTrackIDs];
        newSavedTrackIDs.splice(indexOfTrack, 1);

        return {
          ...state,
          savedTrackIDs: newSavedTrackIDs,
        };
      }
      return {
        ...state,
        savedTrackIDs: [...state.savedTrackIDs, action.trackID],
      };
    }
    default: {
      return state;
    }
  }
}
