import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import theme from '../src/styles/theme';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });
