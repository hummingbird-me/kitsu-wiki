import React, { ReactElement } from 'react';
import { UncontrolledTooltip as Tooltip } from 'reactstrap';
import uniqueID from '../../../util/uniqueID';

const Enum = ({ value }: { value: any }): ReactElement => (
  <span className="badge badge-secondary">{value}</span>
);

const Boolean = ({ value }: { value: any }): ReactElement => (
  <>
    {value && (
      <span className="badge badge-secondary">
        {value.toString().toUpperCase()}
      </span>
    )}
  </>
);

const pad = (number: string | number) =>
  number <= 99 ? ('0' + number).slice(-2) : number;

const Duration = ({ seconds }: { seconds: number }): ReactElement => (
  <>{`${pad(Math.floor(seconds / 3600))}:${pad(
    Math.floor((seconds % 3600) / 60)
  )}:${pad(Math.floor((seconds % 3600) % 60))}`}</>
);

const DateString = ({ value }: { value: string }): ReactElement => (
  <>
    {new Intl.DateTimeFormat([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).format(new Date(value))}
  </>
);

const DateTimeString = ({ value }: { value: string }): ReactElement => (
  <>
    {new Intl.DateTimeFormat([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date(value))}
  </>
);

const TruncatedString = ({
  value,
  length,
  wrap = false,
}: {
  value: string;
  length: number;
  wrap?: boolean;
}): ReactElement => {
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

const LocalizedString = ({
  values,
  length,
}: {
  values: any; // check graphql for exact type.
  length: number;
}): ReactElement => {
  return <TruncatedString value={values['en']} length={length} wrap />;
};

const TitlesList = ({
  titles,
  length,
}: {
  titles: any; // check graphql for exact type.
  length: number;
}): ReactElement => (
  <TruncatedString value={titles.canonical} length={length} />
);

const Image = ({
  image,
  view,
}: {
  image: any;
  view: any;
}): ReactElement | null => {
  let url;
  if (view === 'original') {
    url = image.original.url;
  } else {
    url = image.views.find(({ name }: { name: any }) => name === view).url;
  }

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
  Image,
};
