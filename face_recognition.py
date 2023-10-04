#Facial Recognition using Opencv.

import cv2
from time import time

#Face Capturing.
#model_path = r"C:/Users/{Sachin}/AppData/Local/Programs/Python/Python311/Lib/site-packages/cv2/data/haarcascade_frontalface_default.xml"
face_cap = cv2.CascadeClassifier("./Facial Recognition/models/haarcascade_frontalface_default.xml")

#Creating the Video Capturing Object.
video_cap = cv2.VideoCapture(0)

#Initialize a variable to keep track of the "face counter".
face_counter = 0

#Initialize a variable to keep track of "Last Capture Time".
last_capture_time = 0

#Running the Camera All-Time.
while True:
    ret, video_data = video_cap.read()

    #Converting the Captured Face into greyscale.
    grey = cv2.cvtColor(video_data, cv2.COLOR_BGR2GRAY)

    #Captuing the faces.
    faces = face_cap.detectMultiScale(
        grey,
        scaleFactor = 1.1,
        minNeighbors = 5,
        minSize = (30, 30),
        flags = cv2.CASCADE_SCALE_IMAGE
        )

    #Creating the Rectangle around the face.
    for (x, y, w, h) in faces:
        
        current_time = time()

        if current_time - last_capture_time >= 2.0:     #Time after which each photo is taken = "2" secs. 

            cv2.rectangle(video_data, (x,y), (x + w, y + h), (0,255,0),2)

            #Crop the detected face.
            cropped_face = video_data[y : y+h, x : x+w]

            #Update the last_capture_time.
            last_capture_time = current_time

            #Save the cropped face with a unique name.
            face_counter += 1
            face_filename = f'./Facial Recognition/saved faces/face_{face_counter}.jpg'
            cv2.imwrite(face_filename, cropped_face)
            print(f'Saved: {face_filename}')

    #Display the frame with detected faces.
    cv2.imshow("Video_Live", video_data)

    #Exit the loop if the 'a' key is pressed.
    if cv2.waitKey(10) == ord('a'):
        break

#Release the camera and close all OpenCV windows.
video_cap.release()
cv2.destroyAllWindows()