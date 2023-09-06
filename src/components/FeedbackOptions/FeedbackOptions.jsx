import { Container, FbButton } from './FeadbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, feadbackHandler }) {
  return (
    <>
      <Container>
        {options.map(option => {
          return (
            <FbButton
              key={option}
              type="button"
              onClick={()=>feadbackHandler(option)}
            >
              {option}
            </FbButton>
          );
        })}
      </Container>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  feadbackHandler: PropTypes.func.isRequired,
};
