import React, { useState, useContext } from 'react';
import { Collapse } from 'reactstrap';
import CharacterEdit from './CharacterEdit';
import EditProvider, { EditContext } from '../ui/edit/EditProvider';
import ResourceList from '../ui/list/ResourceList';
import CharacterListItem from './CharacterListItem';

const CharacterConnectionList = ({ field }) => {
  const columns = ['slug', 'names', 'image'];
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState();

  const {
    state: {
      initialValue: {
        [field]: { nodes: initialValue }
      },
      value: {
        [field]: { nodes: value }
      }
    },
    dispatch
  } = useContext(EditContext);

  return (
    // <EditProvider initialValue={initialValue}>
    <div className="card mb-3">
      <div className="card-header">
        <button className="btn btn-link" onClick={() => setOpen(!open)}>
          Characters
        </button>
      </div>

      <Collapse isOpen={open}>
        <ResourceList columns={columns}>
          {value.map(({ add, remove, edit, character }, index) =>
            editing === index ? (
              <tr key={index}>
                <td colSpan={columns.length + 2}>
                  <CharacterEdit
                    character={character}
                    onSave={({ value: character }) => {
                      setEditing(undefined);
                      dispatch({
                        field,
                        value: {
                          nodes: [
                            ...value.slice(0, index),
                            { add, remove, edit: true, character },
                            ...value.slice(index + 1)
                          ]
                        }
                      });
                    }}
                    onReset={() => {
                      dispatch({
                        field,
                        value: {
                          nodes: [
                            ...value.slice(0, index),
                            initialValue[index],
                            ...value.slice(index + 1)
                          ]
                        }
                      });
                    }}
                  />
                </td>
              </tr>
            ) : (
              <CharacterListItem
                key={index}
                item={character}
                columns={columns}
                inlineEdit={true}
                added={add}
                removed={remove}
                edited={edit}
                onEdit={() => setEditing(index)}
                onRemove={() =>
                  dispatch({
                    field,
                    value: {
                      nodes: [
                        ...value.slice(0, index),
                        { add: false, remove: true, ...value[index] },
                        ...value.slice(index + 1)
                      ]
                    }
                  })
                }
              />
            )
          )}
        </ResourceList>

        <div className="container-fluid">
          <div className="row justify-content-end p-3">
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={event => {
                event.preventDefault();
                setEditing(value.length);
                dispatch({
                  field,
                  value: {
                    nodes: [
                      ...value,
                      {
                        add: true,
                        character: {
                          __typename: 'Character',
                          slug: '',
                          names: {
                            alternatives: [],
                            canonical: '',
                            localized: {}
                          }
                        }
                      }
                    ]
                  }
                });
              }}>
              Add New
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={event => {
                event.preventDefault();
                setEditing('search');
              }}>
              Add Existing
            </button>
          </div>
        </div>

        {editing === 'search' && (
          <div>
            <input
              className="form-control mt-3"
              placeholder="Search for characters..."
            />
          </div>
        )}
      </Collapse>
    </div>
    // </EditProvider>
  );
};

export default CharacterConnectionList;
