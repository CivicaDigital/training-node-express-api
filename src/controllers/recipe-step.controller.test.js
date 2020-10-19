jest.mock('../connectors/recipe-step.connector.js');
const {
  getRecipeSteps,
  deleteRecipeStep,
  updateRecipeStep,
  createRecipeStep,
} = require('../connectors/recipe-step.connector.js');

const { updateRecipeSteps } = require('./recipe-step.controller');

describe('update recipe steps collection', () => {
  beforeEach(async () => {
    getRecipeSteps.mockReturnValue(
      Promise.resolve([
        {
          recipe_step_id: 11,
          recipe_id: 1,
          step_number: 1,
          step_text: 'step one',
        },
        {
          recipe_step_id: 12,
          recipe_id: 1,
          step_number: 2,
          step_text: 'step two',
        },
      ])
    );
    deleteRecipeStep.mockReturnValue(Promise.resolve({ changes: 1 }));
    updateRecipeStep.mockReturnValue(Promise.resolve({ changes: 1 }));
    createRecipeStep.mockReturnValue(Promise.resolve({ changes: 1 }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('The correct number of changes is returned', async () => {
    const data = [
      {
        recipe_step_id: 11,
        recipe_id: 1,
        step_number: 1,
        step_text: 'step one',
      },
      {
        recipe_step_id: null,
        recipe_id: 1,
        step_number: 2,
        step_text: 'new step two',
      },
    ];
    const result = await updateRecipeSteps(1, data);
    expect(result.changes).toEqual(3);
    expect(getRecipeSteps.mock.calls.length).toEqual(1);
    expect(deleteRecipeStep.mock.calls.length).toEqual(1);
    expect(updateRecipeStep.mock.calls.length).toEqual(1);
    expect(createRecipeStep.mock.calls.length).toEqual(1);
  });

  test('The correct number of changes is returned', async () => {
    const data = [
      {
        recipe_step_id: 11,
        recipe_id: 1,
        step_number: 1,
        step_text: 'step one',
      },
      {
        recipe_step_id: null,
        recipe_id: 1,
        step_number: 2,
        step_text: 'new step two',
      },
    ];
    const result = await updateRecipeSteps(1, data);
    expect(result.changes).toEqual(3);
    expect(getRecipeSteps.mock.calls.length).toEqual(1);
    expect(deleteRecipeStep.mock.calls.length).toEqual(1);
    expect(updateRecipeStep.mock.calls.length).toEqual(1);
    expect(createRecipeStep.mock.calls.length).toEqual(1);
  });
});
