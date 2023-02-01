const Redirect = () => false;
export default Redirect;

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
};
