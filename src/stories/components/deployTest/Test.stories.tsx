import { Divider } from "@/components/Divider";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Test",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    isColumn: false,
  },

  argTypes: {
    isColumn: {
      description: "boolean 값을 통해 구분선의 세로 여부를 정의합니다.",
    },

    style: {
      control: "null",
      description: "기본 CSS 스타일",
    },

    className: {
      description: "기본 className 속성",
    },
  },

  decorators: [
    (DividerComponent) => (
      <section className="w-[60rem] h-[10rem] flex items-center justify-center">
        <DividerComponent />
      </section>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {};
