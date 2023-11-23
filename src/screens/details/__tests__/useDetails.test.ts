import {renderHook, act} from '@testing-library/react-hooks';
import useDetails from '../useDetails';
import {useAppDispatch} from '../../../redux/store';

jest.mock('../../../redux/store', () => ({
  useAppDispatch: jest.fn(),
}));

describe('useDetails', () => {
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize currentVal with "0"', () => {
    const {result} = renderHook(() => useDetails());
    expect(result.current.currentVal).toBe('0');
  });

  test('should update currentVal when handlePress is called with a value', () => {
    const {result} = renderHook(() => useDetails());
    act(() => {
      result.current.handlePress('1');
    });
    expect(result.current.currentVal).toBe('1');
  });

  test('should update currentVal if currentVal is "0" and value is not "0" or a dot', () => {
    const {result} = renderHook(() => useDetails());
    act(() => {
      result.current.handlePress('0');
      result.current.handlePress('1');
    });
    expect(result.current.currentVal).toBe('1');
  });

  test('should call dispatch with the converted value when convertToUSD is called', () => {
    const {result} = renderHook(() => useDetails());
    act(() => {
      result.current.convertToUSD(10, 1.2);
    });

    expect(dispatchMock.mock.calls[0][0].payload as string).toBe('$12.00');
  });
});
