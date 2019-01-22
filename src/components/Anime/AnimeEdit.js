import React from 'react';
import EditProvider from '../ui/edit/EditProvider';
import InputField from '../ui/edit/InputField';
import SelectField from '../ui/edit/SelectField';
import ImageField from '../ui/edit/ImageField';
import TitlesField from '../ui/edit/TitlesField';
import MapField from '../ui/edit/MapField';
import FormActions from '../ui/edit/FormActions';
// import CharacterEdit from '../Characters/CharacterEdit';
// import CharacterList from '../Characters/CharacterList';

const AnimeEdit = ({ anime }) => (
  <form>
    <EditProvider initialValue={anime}>
      <InputField readOnly field="id" type="text" />
      <InputField readOnly field="slug" type="text" />
      <TitlesField field="titles" />
      <MapField field="synopsis" type="textarea" />
      <ImageField field="posterImage" type="image" />
      <ImageField field="bannerImage" type="image" />
      <InputField
        field="sfw"
        type="checkbox"
        validate={() => ['error1', 'error2']}
      />
      <SelectField field="ageRating" options={['G', 'PG', 'R', 'R18']} />
      <InputField field="ageRatingGuide" type="text" />
      <SelectField
        field="season"
        options={['WINTER', 'SPRING', 'SUMMER', 'FALL']}
      />
      <SelectField
        field="status"
        options={['TBA', 'FINISHED', 'CURRENT', 'UPCOMING', 'UNRELEASED']}
      />
      <InputField field="startDate" type="date" />
      <InputField field="endDate" type="date" />
      <InputField readOnly field="nextRelease" type="datetime-local" />
      <InputField field="episodeCount" type="number" />
      <InputField field="episodeLength" type="number" />
      <InputField readOnly field="totalLength" type="text" />
      <InputField readOnly field="userCount" type="text" />
      <InputField readOnly field="favoritesCount" type="text" />
      <InputField readOnly field="averageRating" type="text" />
      {/* <span>Characters</span> */}
      {/* <CharacterList characters={anime.characters.nodes} /> */}

      {/* {anime.characters.nodes.map(({ character }) => (
      <div className="form-inline">
      </div>
    ))} */}
      <FormActions onSave={console.log} />
    </EditProvider>
  </form>
);

export default AnimeEdit;
