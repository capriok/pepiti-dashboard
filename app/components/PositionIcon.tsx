import { ThemeIcon } from "@mantine/core";
import { IconTrophy } from "@tabler/icons";

interface PositionIconProps {
  position: number;
}

export const PositionIcon = ({ position }: PositionIconProps) => {
  const handlePosition = () => {
    switch (position) {
      case 1:
        return { from: "gold", to: "yellow" };
      case 2:
        return { from: "gray", to: "white" };
      case 3:
        return { from: "brown", to: "yellow" };
    }
  };

  return (
    <ThemeIcon
      size="lg"
      variant="gradient"
      gradient={{
        from: handlePosition()?.from as string,
        to: handlePosition()?.to as string,
      }}
    >
      <IconTrophy />
    </ThemeIcon>
  );
};
