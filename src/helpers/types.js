import Type from "prop-types";

export const TargetProps = Type.shape({
  id: Type.string,
  gene_info: Type.shape({
    symbol: Type.string,
    name: Type.string,
  }),
  tractability: Type.object,
});

export const ScoreProps = Type.shape({
  overall: Type.number,
  dataTypes: Type.object,
  datasources: Type.object,
});

export const DataProps = Type.arrayOf(
    Type.shape({
      id: Type.string,
      is_direct: Type.bool,
      target: TargetProps,
      association_score: ScoreProps,
      disease: Type.object,
      evidence_count: Type.object
    })
  );
