type PageDetailKelasProps = {
  params: { slug: string };
};

const PageDetailKelas = (props: PageDetailKelasProps) => {
  const { params } = props;

  return (
    <>
      <div>
        <p>ini kelas dengan id : {params.slug}</p>
      </div>
    </>
  );
};

export default PageDetailKelas;
