import styled from "@emotion/styled";

export const BannerWrapper = styled('div')({
  height: '550px',
  position: 'relative',
  '@media (max-width: 425px)': {
    height: '300px',
  },
  img: {
    width: 'auto',
    height: '100%',
  },
});

export const BannerText = styled('div')({
  position: 'absolute',
  left: '10%',
  top: '22%',
  color: '#fff',
  fontSize: '72px',
  fontWeight: 700,
  '@media (max-width: 425px)': {
    textAlign: 'center',
    width: '100%',
    fontSize: '42px',
    left: '0',
    top: '25%',
  },
});
