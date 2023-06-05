import { SubText } from "components/UI/Typography";
import PropTypes from "prop-types";
import { TableHead, Table, TableHeading, TableHeadingTime, Line } from "./styled";

import TrackRow from "./TrackRow";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";

function TracksTable({ tracks, isLoading }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying, savedTrackIDs } = useContext(PlayerContext);
  const handleTrackClick = (clickedTrack) => {
    if (track?.id === clickedTrack.id) {
      dispatch({ type: actions.TOGGLEPLAY });
    } else {
      dispatch({
        type: actions.SET_TRACKS_DATA,
        track: clickedTrack,
        tracks: tracks,
        isPlaying: true,
      });
    }
  };
  const handleSaveTrackClick = (trackID) => {
    dispatch({ type: actions.TOGGLE_SAVE_TRACK, trackID });
  };
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first={1}>
            <SubText>{isLoading ? <Skeleton width={25} /> : "#"}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : "Song Name"}</SubText>
          </TableHeading>
          <TableHeadingTime>
            <SubText>{isLoading ? <Skeleton /> : "Time"}</SubText>
          </TableHeadingTime>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : "Album Name"}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton width={70} /> : "Actions"}</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {!isLoading &&
          tracks?.map((currentTrack, index) => (
            <TrackRow
              isPlaying={track?.id === currentTrack.id && isPlaying}
              onClick={handleTrackClick}
              key={currentTrack.id}
              track={currentTrack}
              index={index}
              handleSaveTrackClick={handleSaveTrackClick}
              isSaved={savedTrackIDs.includes(currentTrack.id)}
            />
          ))}
        {isLoading && [...Array(9).keys()].map((num) => <TrackRow key={num} index={num} />)}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
  isLoading: PropTypes.bool,
};

export default TracksTable;
