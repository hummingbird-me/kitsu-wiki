import React from 'react';
import { UncontrolledTooltip as Tooltip } from 'reactstrap';
import uniqueID from '../../../util/uniqueID';

const Enum = ({ value }) => (
  <span className="badge badge-secondary">{value}</span>
);

const Boolean = ({ value }) => (
  <>
    {value && (
      <span className="badge badge-secondary">
        {value.toString().toUpperCase()}
      </span>
    )}
  </>
);

const pad = number => (number <= 99 ? ('0' + number).slice(-2) : number);

const Duration = ({ seconds }) => (
  <>{`${pad(Math.floor(seconds / 3600))}:${pad(
    Math.floor((seconds % 3600) / 60)
  )}:${pad(Math.floor((seconds % 3600) % 60))}`}</>
);

const DateString = ({ value }) => (
  <>
    {new Intl.DateTimeFormat([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }).format(new Date(value))}
  </>
);

const DateTimeString = ({ value }) => (
  <>
    {new Intl.DateTimeFormat([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }).format(new Date(value))}
  </>
);

const TruncatedString = ({ value, length, wrap }) => {
  const id = uniqueID();
  const truncate = value.length >= length;
  return (
    <>
      <span id={id}>{truncate ? value.slice(0, length) + '...' : value}</span>
      {truncate && (
        <Tooltip target={id} innerClassName={wrap ? '' : 'text-nowrap mw-100'}>
          {value}
        </Tooltip>
      )}
    </>
  );
};

const LocalizedString = ({ values, length }) => {
  const en = values.find(val => val.locale === 'en').text;
  return <TruncatedString value={en} length={length} wrap />;
};

const TitlesList = ({ titles, length }) => (
  <TruncatedString value={titles.canonical} length={length} />
);

const Image = ({ image, view }) => {
  const url = image.views.find(({ name }) => name === view).url;
  if (!url || url.includes('missing.')) return null;

  return <img src={url} alt={view} height={40} />;
};

export {
  Enum,
  Boolean,
  Duration,
  DateString,
  DateTimeString,
  TruncatedString,
  LocalizedString,
  TitlesList,
  Image
};
