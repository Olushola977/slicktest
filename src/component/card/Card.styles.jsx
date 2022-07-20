import styled from "@emotion/styled";

export const CardWrapper = styled('div')({
  display: 'inline-block',
  borderRadius: '12px',
  height: 300,
  width: 300,
  background: '#000',
  // img: {
  //   width: '100%',
  //   height: '100%',
  //   objectFit: 'cover',
  //   borderRadius: '12px',
  // },
  div: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h4: {
    whiteSpace: 'nowrap',
    fontWeight: 400,
    fontSize: 24,
    width: '90%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#fff',
    textAlign: 'center',
  },
  margin: '0px 13px 0px 0px',
  '@media (max-width: 425px)': {
    height: 200,
    width: 200,
  },
});
