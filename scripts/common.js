const MOCK_URL = 'https://d82f7ea7-bb19-4291-8824-93f3a781f7a1.mock.pstmn.io';
const COURSES_URL = 'https://api.wisey.app/api/v1/core/preview-courses';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkNjVhMWFkNy01MjViLTRmYzMtODY3ZC1lNWQwN2Q5MDliZDEiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3Nzc5ODcsImV4cCI6MTY3OTY3Nzk4N30.3-ZN4PLVqeUouzxOCHUCvjoXqhjST8fsbbh9USaSO-s';

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true'
};

const requestOptions = {
  method: "GET",
  mode: "cors",
  redirect: 'follow',
  headers: headers
};

const createVideo = ({src, poster = null, muted = true, controls = false, className = 'video'}) => {
  const video = document.createElement('video');
  const videoSrc = src;
  video.muted = muted;
  if (!muted) video.volume = .2;
  video.className = className;
  if (controls) video.controls = 'controls'
  if (poster) video.poster = poster;
  if (!Hls.isSupported()) return;
  const hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  return video;
}