import styled from '@emotion/styled';

export const PageWrapper = styled('div')({
  width: '100%',
  overflow: 'hidden',
})
export const SearchWrapper = styled('div')({
  width: '90%',
  padding: '40px 0px',
  margin: '0 auto',
  '@media (max-width: 425px)': {
    width: '80%',
  },
});

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 0px 50px 70px',
  margin: '20px 0px',
  gap: 13,
  '@media (max-width: 425px)': {
    paddingLeft: 30,
  },
  '@media (width: 768px)': {
    paddingLeft: 40,
  },
});

export const CardContainer = styled('div')({
  overflow: 'auto',
  whiteSpace: 'nowrap',
});

export const ContainerHeader = styled('h4')({
  fontSize: 24,
  fontWeight: 400,
})

export const EmptyContainer = styled('div')({
  width: '100%',
  height: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  fontSize: '3rem',
  h4: {
    fontSize: '2rem',
  },
})
