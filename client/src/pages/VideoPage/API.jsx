export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2YzQ0MTJlYy04ZGQ1LTRjNTAtOGVhMS0yOTdiZWY0YTg3YjQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5MTQxODc2NSwiZXhwIjoxNjkyMDIzNTY1fQ.lnTq10JfaoiJQiHeNkfp96HZV5K69D5bNdGHvNOLS1s";

// API call to create meeting
export const createNewRoom = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: authToken,
      "Content-Type": "application/json",
    },
  });

  const { roomId } = await res.json();
  console.log(res);
  return roomId;
};
