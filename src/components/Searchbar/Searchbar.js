import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { Formik } from 'formik';
import {
  SearchbarBox,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnText,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarBox>
      <Formik
        initialValues={{ searchKey: '' }}
        onSubmit={(values, { resetForm }) => {
          //   console.log(values);
          onSubmit(values);
          resetForm();
        }}
      >
        <SearchForm>
          <SearchFormBtn type="submit">
            <FiSearch />
            <SearchFormBtnText>Search</SearchFormBtnText>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            name="searchKey"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
