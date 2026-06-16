import { useMemo } from 'react';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    delay: number;
}

const createStars = (count: number): Star[] =>
    Array.from({ length: count }, (_, id) => ({
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.15,
        delay: Math.random() * 4
    }));

const StarLayer = ({
    stars,
    className
}: {
    stars: Star[];
    className: string;
}) => (
    <div className={`star-field-layer ${className}`}>
        {stars.map((star) => (
            <span
                key={star.id}
                className="star-dot"
                style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity,
                    animationDelay: `${star.delay}s`
                }}
            />
        ))}
    </div>
);

export const StarBackground = () => {
    const starsNear = useMemo(() => createStars(180), []);
    const starsFar = useMemo(() => createStars(120), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <StarLayer stars={starsFar} className="star-field-slow" />
            <StarLayer stars={starsNear} className="star-field-fast" />
        </div>
    );
};
