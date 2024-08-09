import type { Preview } from "@storybook/react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import "../src/App";

import useWindowResize from "../src/hooks/useWindowSize";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const dimension = useWindowResize();
      const { viewMode } = context;

      // Render the dimensions only in the "story" view mode
      return (
        <>
          {viewMode === "story" && (
            <div
              style={{
                marginBottom: "16px",
                fontFamily: "Arial, sans-serif",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "10px",
              }}
            >
              <strong>
                {dimension.width} x {dimension.height}
              </strong>
            </div>
          )}
          <div style={{ margin: "40px" }}>
            <Story />
          </div>
        </>
      );
    },
  ],
};

export default preview;
