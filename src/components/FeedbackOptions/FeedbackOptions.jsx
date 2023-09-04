import { Container, FbButton } from './FeadbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, optionsHandlers }) {
  return (
    <>
      <Container>
        {options.map(option => {
          const [value, setValue] = optionsHandlers[option];
          return (
            <FbButton
              key={option}
              type="button"
              onClick={() => setValue(value + 1)}
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
  optionsHandlers: PropTypes.object.isRequired,
};
