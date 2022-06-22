import styled from 'styled-components';
import PageContent from '../../components/PageContent';

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useQuery } from '../../hooks/useQuery';

// function useQuery() {
//   const { search } = useLocation();

//   return useMemo(() => new URLSearchParams(search), [search]);
// }

const Search = () => {
  const Query = useQuery();
  const { t, i18n } = useTranslation();

  const [keyword, setKeyword] = useState(Query.get('keyword'));

  return (
    <PageContent>
      {t('search')} / {keyword}
    </PageContent>
  );
};

export default Search;
