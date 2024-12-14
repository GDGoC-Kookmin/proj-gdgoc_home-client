import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    }, 
    rules: {
      'react-refresh/only-export-components': 'warn',
      'no-duplicate-imports': 'error', //�ߺ� Import �ȵſ�
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], //�ܼ��� Ȯ�� �� ����ô�
      'no-unused-vars': 'error', //������� ���� ������ ���ֱ�
      'no-multiple-empty-lines': 'error', //���� ����
      'no-undef': 'error', //���� �� �� ���� ��� x
      indent: ['error', 2], //�鿩���� 2ĭ!
      'no-trailing-spaces': 'error', // �������� ���� ���ֱ�
      'import/newline-after-import': ['error', { 'count': 1 }], //import ������ �ڿ� �� ĭ ���� �ڵ� �ۼ�
      //����� import �� ��쿡�� ���� import �÷������� ��ġ�ؾ� �ϰ� .eslintrc �� plugin �迭�� import �� �߰��ؾ� �Ѵ�.
      
  node : true
    },
  },
)
