import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width="375px"
      height="415"
      viewBox="0 0 375 415"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <Mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={375}
        height={394}
      >
        <Path
          d="M0 0h375v246.567c0 23.006-14.576 43.486-36.313 51.021l-267 92.56C36.606 402.31 0 376.257 0 339.127V0z"
          fill="#FEC6BC"
        />
      </Mask>
      <G mask="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#FFF1C2">
        <G
          style={{
            mixBlendMode: "screen",
          }}
          opacity={0.28}
        >
          <Path d="M325.138 273.598c-1.365 2.05-2.661 3.998-3.876 5.836-6.08 9.196-10.982 19.578-15.962 30.127l-.311.659c-5.102 10.804-10.322 21.781-17.043 32.031-13.392 20.424-32.755 37.986-69.014 44.994-45.77 8.846-106.453 4.259-153.225-12.23-23.387-8.246-43.177-19.426-55.898-33.279-12.677-13.806-18.327-30.244-13.576-49.233 6.66-26.62 13.068-46.081 25.6-63.894 12.535-17.817 31.27-34.084 62.763-54.136 12.352-7.864 22.3-17.839 31.628-28.58 4.095-4.716 8.082-9.593 12.098-14.505l1.669-2.04c4.588-5.607 9.245-11.244 14.202-16.767 19.79-22.048 44.371-42.284 88.018-50.72 16.774-3.24 32.08-6.988 45.952-10.384 5.174-1.267 10.148-2.484 14.925-3.609 17.636-4.152 32.533-7.02 45.04-6.517 12.435.501 22.422 4.33 30.362 13.549 8 9.286 14.033 24.168 18.196 47.021 5.953 32.682-4.458 68.135-19.401 99.965-13.386 28.515-30.327 53.959-42.147 71.712zm1.046.698c24.999-37.546 73.163-109.885 61.739-172.601-13.669-75.037-47.772-66.688-110.086-51.432-13.863 3.394-29.123 7.13-45.864 10.365-56.326 10.885-81.205 41.318-104.623 69.964-13.163 16.1-25.864 31.637-43.429 42.821C20.82 213.591 8.35 238.9-4.986 292.198c-19.48 77.852 132.163 114.06 224.156 96.281 55.306-10.688 71.874-45.781 87.248-78.342 4.994-10.579 9.863-20.89 15.892-30.01 1.213-1.835 2.509-3.782 3.874-5.831z" />
          <Path d="M321.066 274.552a1968.694 1968.694 0 00-3.362 5.049c-5.279 7.966-9.535 16.956-13.853 26.077l-.272.574c-4.425 9.348-8.948 18.832-14.768 27.688-11.591 17.635-28.341 32.801-59.716 38.864-39.638 7.661-92.195 3.719-132.695-10.516-20.252-7.118-37.37-16.768-48.363-28.716-10.949-11.9-15.816-26.056-11.709-42.415 5.78-23.02 11.334-39.827 22.181-55.21 10.85-15.387 27.071-29.448 54.363-46.796 10.726-6.818 19.362-15.462 27.454-24.76 3.554-4.082 7.012-8.304 10.494-12.554l1.445-1.763c3.979-4.851 8.014-9.725 12.309-14.5 17.141-19.056 38.42-36.54 76.202-43.843 14.543-2.81 27.814-6.058 39.838-9 4.483-1.097 8.793-2.151 12.93-3.125 15.286-3.597 28.177-6.078 38.99-5.648 10.742.427 19.347 3.722 26.187 11.648 6.9 7.995 12.116 20.826 15.714 40.577 5.139 28.21-3.878 58.834-16.833 86.357-11.604 24.653-26.287 46.654-36.536 62.012zm1.045.699c21.677-32.48 63.44-95.058 53.561-149.293-11.821-64.89-41.377-57.657-95.384-44.441-12.015 2.94-25.141 6.22-39.65 9.024-48.816 9.434-70.487 35.718-90.791 60.5-11.412 13.93-22.424 27.371-37.65 37.049-54.698 34.77-65.513 56.663-77.088 102.761-16.907 67.336 114.496 98.596 194.224 83.188 47.932-9.264 62.303-39.619 75.636-67.785 4.332-9.15 8.554-18.069 13.783-25.959 1.052-1.587 2.175-3.271 3.359-5.044z" />
        </G>
        <G
          style={{
            mixBlendMode: "screen",
          }}
          opacity={0.28}
        >
          <Path d="M294.338 267.295c-.907 1.447-1.769 2.822-2.576 4.119-4.039 6.492-7.282 13.829-10.578 21.285l-.205.465c-3.376 7.636-6.83 15.393-11.295 22.629-8.897 14.418-21.812 26.78-46.114 31.586-30.677 6.067-71.42 2.546-102.882-9.351-15.731-5.948-29.062-13.961-37.66-23.838-8.569-9.842-12.434-21.519-9.33-34.958 4.351-18.839 8.565-32.605 16.896-45.176 8.333-12.573 20.833-24.02 41.878-38.094 8.254-5.52 14.886-12.546 21.098-20.118 2.728-3.324 5.381-6.763 8.054-10.228l1.111-1.438c3.055-3.954 6.154-7.929 9.457-11.822 13.182-15.54 29.588-29.775 58.842-35.56 11.242-2.223 21.497-4.811 30.791-7.157 3.467-.874 6.8-1.716 10-2.491 11.817-2.865 21.802-4.832 30.197-4.419 8.347.41 15.066 3.169 20.436 9.738 5.41 6.619 9.525 17.194 12.42 33.411 4.141 23.193-2.689 48.277-12.575 70.773-8.856 20.152-20.112 38.113-27.965 50.644zm.705.499c16.609-26.502 48.61-77.564 40.664-122.07-9.507-53.25-32.356-47.483-74.106-36.947-9.288 2.344-19.512 4.924-30.733 7.143-37.751 7.466-54.311 28.927-69.9 49.127-8.761 11.355-17.216 22.311-28.953 30.16-42.168 28.199-50.424 46.084-59.137 83.804-12.726 55.097 89.201 81.437 150.857 69.244 37.067-7.33 48.03-32.131 58.202-55.143 3.305-7.476 6.526-14.764 10.532-21.202.806-1.295 1.667-2.669 2.574-4.116z" />
          <Path d="M291.609 267.953c-.786 1.252-1.533 2.441-2.234 3.564-3.507 5.623-6.323 11.976-9.18 18.423l-.18.406c-2.928 6.606-5.921 13.308-9.788 19.56-7.7 12.449-18.872 23.124-39.901 27.283-26.567 5.253-61.854 2.225-89.097-8.045-13.623-5.136-25.153-12.052-32.583-20.57-7.401-8.484-10.73-18.54-8.047-30.117 3.777-16.292 7.429-28.181 14.64-39.036 7.213-10.859 18.036-20.753 36.274-32.929 7.168-4.785 12.925-10.874 18.314-17.428 2.367-2.879 4.669-5.856 6.987-8.853l.962-1.243c2.648-3.42 5.334-6.857 8.195-10.223 11.418-13.432 25.621-25.731 50.944-30.738 9.746-1.928 18.638-4.171 26.694-6.203 3.004-.757 5.891-1.486 8.663-2.158 10.243-2.481 18.883-4.182 26.141-3.829 7.211.35 13 2.724 17.626 8.373 4.665 5.697 8.223 14.816 10.726 28.832 3.574 20.019-2.341 41.686-10.913 61.138-7.678 17.423-17.433 32.952-24.243 43.793zm.705.5c14.402-22.926 42.151-67.098 35.28-105.585-8.222-46.049-28.024-41.054-64.209-31.926-8.05 2.031-16.844 4.297-26.568 6.22-32.718 6.471-47.144 25.005-60.66 42.481-7.597 9.823-14.927 19.301-25.101 26.094-36.553 24.403-43.713 39.873-51.276 72.497-11.047 47.655 77.275 70.398 130.711 59.83 32.125-6.353 41.634-27.806 50.457-47.711 2.866-6.467 5.66-12.77 9.134-18.339a1178.67 1178.67 0 012.232-3.561z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;