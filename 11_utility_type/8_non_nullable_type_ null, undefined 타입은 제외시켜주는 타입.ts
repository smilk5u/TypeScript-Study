/**
 * Non Nullable type - 선택한 타입 중에서 null, undefined 만 제외한 타입으로만 설정해주는 유틸리티 타입
 */
type NonNull = NonNullable<string | number | boolean | null | undefined | object>;