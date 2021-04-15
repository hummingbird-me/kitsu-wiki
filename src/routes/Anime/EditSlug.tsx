import { ReactElement } from 'react';
import Loading from 'src/components/ui/loading/Loading';

// GraphQl
import { useFindAnimeBySlugQuery, FindAnimeBySlugQueryVariables } from 'src/types/graphql';
import CreateFromType from '../WikiSubmission/CreateFromType';

const EditSlug = ({ slug }: { slug: string }): ReactElement => {
  const findAnimeBySlug: FindAnimeBySlugQueryVariables = { slug: slug };
  const { data, error, loading } = useFindAnimeBySlugQuery({
    variables: findAnimeBySlug,
  });

  if (loading) return <Loading />;
  if (!data || !data.findAnimeBySlug || error) return <div>Error: {error}</div>;

  if (error) return <div>Error: {error}</div>;

  return <CreateFromType title={data.findAnimeBySlug.slug} record={data.findAnimeBySlug} />;
};

export default EditSlug;
