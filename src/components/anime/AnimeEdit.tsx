import React, { ReactElement } from 'react';
import { FindAnimeFieldsFragment } from '../../routes/Anime/findAnimeById.types';
import EditProvider from '../ui/edit/EditProvider';
import InputField from '../ui/edit/InputField';
import SelectField from '../ui/edit/SelectField';
import ImageField from '../ui/edit/ImageField';
import TitlesField from '../ui/edit/TitlesField';
import MapField from '../ui/edit/MapField';
import FormActions from '../ui/edit/FormActions';
import { Maybe } from 'src/types/graphql';

const AnimeEdit = ({
  anime,
  onSave,
}: {
  anime: Maybe<FindAnimeFieldsFragment | undefined>;
  onSave: any;
}): ReactElement => {
  return <div>Hello</div>;
};
// <form>
// <EditProvider initialValue={anime}>
//   <InputField readOnly field="id" type="text" />
//   <InputField readOnly field="slug" type="text" />
//   <TitlesField field="titles" />
//   <MapField field="synopsis" keyName="Locale" type="textarea" />
//   <ImageField field="posterImage" type="image" />
//   <ImageField field="bannerImage" type="image" />
//   <InputField
//     field="sfw"
//     type="checkbox"
//     validate={() => ['error1', 'error2']}
//   />
//   <SelectField field="ageRating" options={['G', 'PG', 'R', 'R18']} />
//   <InputField field="ageRatingGuide" type="text" />
//   <SelectField
//     field="season"
//     options={['WINTER', 'SPRING', 'SUMMER', 'FALL']}
//   />
//   <SelectField
//     field="status"
//     options={['TBA', 'FINISHED', 'CURRENT', 'UPCOMING', 'UNRELEASED']}
//   />
//   <InputField field="startDate" type="date" />
//   <InputField field="endDate" type="date" />
//   <InputField readOnly field="nextRelease" type="datetime-local" />
//   <InputField field="episodeCount" type="number" />
//   <InputField field="episodeLength" type="number" />
//   <InputField readOnly field="totalLength" type="text" />
//   <InputField readOnly field="userCount" type="text" />
//   <InputField readOnly field="favoritesCount" type="text" />
//   <InputField readOnly field="averageRating" type="text" />
//   <FormActions onSave={onSave} />
// </EditProvider>
// </form>

export default AnimeEdit;
