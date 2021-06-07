import { ReactElement } from 'react';
import Loading from 'src/components/ui/loading/Loading';

// GraphQL
import { useFindAnimeByIdQuery, FindAnimeByIdQueryVariables } from 'src/types/graphql';
import CreateFromType from '../WikiSubmission/CreateFromType';

const EditId = ({ id }: { id: string }): ReactElement => {
  const findAnimeByIdVariables: FindAnimeByIdQueryVariables = { id: id };
  const { data, error, loading } = useFindAnimeByIdQuery({
    variables: findAnimeByIdVariables,
  });

  if (loading) return <Loading />;
  if (!data || !data.findAnimeById || error) return <div>Error: {error}</div>;

  return <CreateFromType title={data.findAnimeById.slug} record={data.findAnimeById} />;
};

export default EditId;
