/**
 * Template Literal
 */
type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>; // 모두 대문자로 변경

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>; // 모두 소문자로 변경

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>; // 맨 앞글자만 대문자로 변경

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>; // 모두 소문자로 변경