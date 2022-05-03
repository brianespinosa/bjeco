import styles from './DivideSVG.module.scss';

const WIDTH = 1000;
const HEIGHT = 200;
const DIMENSION_HEIGHT = 60;
const BORDER_WIDTH = 2;
const HALF_BORDER = BORDER_WIDTH / 2;
const COLOR = '#ffffff';

const rand = 'sd65f4';
const DIVIDER_ID = `divider_${rand}`;
const SECTION_ID = `section_${rand}`;

const GROUP_PROPS = {
  fill: 'none',
  stroke: COLOR,
  strokeWidth: BORDER_WIDTH,
};

type GroupProps = {
  label: number;
  width: number;
  x: number;
};

const DividerGroup = ({
  isLabelBelow = true,
  label,
  width,
  x,
}: GroupProps & { isLabelBelow?: boolean }): JSX.Element => {
  const textOffset = isLabelBelow
    ? HEIGHT + DIMENSION_HEIGHT / 2 + DIMENSION_HEIGHT
    : HEIGHT / 2 + DIMENSION_HEIGHT;

  return (
    <g id={DIVIDER_ID} {...GROUP_PROPS}>
      <rect
        y={DIMENSION_HEIGHT + HALF_BORDER}
        x={x}
        width={width}
        height={HEIGHT}
        fill='url(#diagonalHatch)'
      />
      <text
        stroke='none'
        fill={COLOR}
        x={width / 2 + x}
        y={textOffset}
        textAnchor='middle'
        dominantBaseline='middle'
      >
        {Math.round(label * 1000) / 1000}
      </text>
    </g>
  );
};

const SectionGroup = ({ width, label, x }: GroupProps): JSX.Element => {
  return (
    <g id={SECTION_ID} {...GROUP_PROPS}>
      <rect
        y={DIMENSION_HEIGHT + HALF_BORDER}
        x={x}
        width={width}
        height={HEIGHT}
      />
      <text
        stroke='none'
        fill={COLOR}
        x={width / 2 + x}
        y={HEIGHT / 2 + DIMENSION_HEIGHT}
        textAnchor='middle'
        dominantBaseline='middle'
      >
        {Math.round(label * 1000) / 1000}
      </text>
    </g>
  );
};

type DivideSVGProps = {
  overallWidth: number;
  dividerCount: number;
  dividerWidth: number;
  sectionCount: number;
  sectionWidth: number;
};

const DivideSVG = ({
  dividerCount,
  dividerWidth,
  overallWidth,
  sectionCount,
  sectionWidth,
}: DivideSVGProps): JSX.Element => {
  const sectionArray = [...Array(sectionCount).keys()];
  const dividerArray = [...Array(dividerCount).keys()];

  const scaleSection = (sectionWidth / overallWidth) * WIDTH;
  const scaleDivider = (dividerWidth / overallWidth) * WIDTH;

  const viewBox = `0 0 ${WIDTH + BORDER_WIDTH} ${
    HEIGHT + BORDER_WIDTH + DIMENSION_HEIGHT * 2
  }`;

  return (
    <svg viewBox={viewBox} role='img' className={styles['_']}>
      <defs>
        <marker
          id='arrow'
          viewBox='0 0 10 10'
          refX='10'
          refY='5'
          markerWidth='10'
          markerHeight='10'
          orient='auto-start-reverse'
        >
          <path d='M 0 0 L 10 5 L 0 10 z' fill={COLOR} />
        </marker>
        <pattern
          id='diagonalHatch'
          width='5'
          height='5'
          patternTransform='rotate(45 0 0)'
          patternUnits='userSpaceOnUse'
        >
          <line
            x1='0'
            y1='0'
            x2='0'
            y2='5'
            style={{ stroke: `${COLOR}80`, strokeWidth: 1 }}
          />
        </pattern>
      </defs>
      <line
        x1={WIDTH / 2 - DIMENSION_HEIGHT / 2}
        y1={DIMENSION_HEIGHT / 2}
        x2={HALF_BORDER}
        y2={DIMENSION_HEIGHT / 2}
        stroke={COLOR}
        markerEnd='url(#arrow)'
      />
      <line
        x1={WIDTH / 2 + DIMENSION_HEIGHT / 2}
        y1={DIMENSION_HEIGHT / 2}
        x2={WIDTH}
        y2={DIMENSION_HEIGHT / 2}
        stroke={COLOR}
        markerEnd='url(#arrow)'
      />
      <text
        stroke='none'
        fill={COLOR}
        x={WIDTH / 2 + HALF_BORDER}
        y={DIMENSION_HEIGHT / 2 + HALF_BORDER}
        textAnchor='middle'
        dominantBaseline='middle'
      >
        {overallWidth}
      </text>
      <SectionGroup width={scaleSection} label={sectionWidth} x={HALF_BORDER} />
      <DividerGroup
        isLabelBelow={scaleDivider < 100}
        width={scaleDivider}
        label={dividerWidth}
        x={scaleSection + HALF_BORDER}
      />
      {sectionArray.map((sectionIndex) => {
        return sectionIndex ? ( // First has already been rendered as a group
          <use
            key={sectionIndex}
            href={`#${SECTION_ID}`}
            x={(scaleSection + scaleDivider) * sectionIndex}
          />
        ) : null;
      })}
      {dividerArray.map((dividerIndex) => {
        return dividerIndex ? ( // First has already been rendered as a group
          <use
            key={dividerIndex}
            href={`#${DIVIDER_ID}`}
            x={(scaleSection + scaleDivider) * dividerIndex}
          />
        ) : null;
      })}
    </svg>
  );
};

export default DivideSVG;
