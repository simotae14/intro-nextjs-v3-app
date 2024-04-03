const DocsIdPage = ({ params }: { params: { id: string, title: string } }) => {
  return (
    <div>id {params.id} {params.title}</div>
  );
};
export default DocsIdPage;