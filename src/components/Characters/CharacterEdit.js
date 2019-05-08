import React from 'react';
import EditProvider from '../ui/edit/EditProvider';
import InputField from '../ui/edit/InputField';
import TitlesField from '../ui/edit/TitlesField';
import ImageField from '../ui/edit/ImageField';
import FormActions from '../ui/edit/FormActions';

const CharacterEdit = ({ character, onSave, onReset }) => (
  <EditProvider initialValue={character}>
    <InputField readOnly field="id" type="text" />
    <InputField readOnly field="slug" type="text" />
    <TitlesField field="names" />
    <ImageField field="image" type="image" />
    <FormActions onSave={onSave} onReset={onReset} />
  </EditProvider>
);

export default CharacterEdit;
